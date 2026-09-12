import { CustomerDetails } from '../types';

export const CHECKOUT_DRAFT_KEY = 'buubu_bloom_checkout_draft';

export interface CheckoutDraft {
  fullName: string;
  phoneNumber: string;
  deliveryMethod: 'delivery' | 'pickup';
  deliveryState: string;
  address: string;
  notes: string;
}

const DEFAULT_DRAFT: CheckoutDraft = {
  fullName: '',
  phoneNumber: '',
  deliveryMethod: 'delivery',
  deliveryState: 'Lagos (Lekki / Ajah / Orchid)',
  address: '',
  notes: ''
};

/**
 * Retrieves the customer's draft contact/delivery information from the current session.
 * Strictly NEVER retrieves or stores credit cards, CVVs, pins or passwords.
 */
export function getStoredCheckoutDraft(): CheckoutDraft {
  if (typeof window === 'undefined') return DEFAULT_DRAFT;

  try {
    // Prefer sessionStorage for current shopping session; fallback to localStorage if needed
    const storage = window.sessionStorage || window.localStorage;
    const raw = storage.getItem(CHECKOUT_DRAFT_KEY);
    if (!raw) return DEFAULT_DRAFT;

    const parsed = JSON.parse(raw);
    return {
      fullName: typeof parsed.fullName === 'string' ? parsed.fullName : '',
      phoneNumber: typeof parsed.phoneNumber === 'string' ? parsed.phoneNumber : '',
      deliveryMethod: parsed.deliveryMethod === 'pickup' ? 'pickup' : 'delivery',
      deliveryState: typeof parsed.deliveryState === 'string' ? parsed.deliveryState : DEFAULT_DRAFT.deliveryState,
      address: typeof parsed.address === 'string' ? parsed.address : '',
      notes: typeof parsed.notes === 'string' ? parsed.notes : ''
    };
  } catch (err) {
    console.warn('[CheckoutStorage] Failed to read draft from storage:', err);
    return DEFAULT_DRAFT;
  }
}

/**
 * Preserves the customer's contact/delivery draft so accidental back navigation
 * does not force them to retype their name, phone, or address.
 */
export function saveStoredCheckoutDraft(draft: Partial<CheckoutDraft>): void {
  if (typeof window === 'undefined') return;

  try {
    const current = getStoredCheckoutDraft();
    const updated: CheckoutDraft = {
      fullName: draft.fullName !== undefined ? draft.fullName : current.fullName,
      phoneNumber: draft.phoneNumber !== undefined ? draft.phoneNumber : current.phoneNumber,
      deliveryMethod: draft.deliveryMethod !== undefined ? draft.deliveryMethod : current.deliveryMethod,
      deliveryState: draft.deliveryState !== undefined ? draft.deliveryState : current.deliveryState,
      address: draft.address !== undefined ? draft.address : current.address,
      notes: draft.notes !== undefined ? draft.notes : current.notes
    };

    const storage = window.sessionStorage || window.localStorage;
    storage.setItem(CHECKOUT_DRAFT_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('[CheckoutStorage] Failed to write draft to storage:', err);
  }
}

/**
 * Clears the draft checkout information upon successful order completion.
 */
export function clearStoredCheckoutDraft(): void {
  if (typeof window === 'undefined') return;

  try {
    const storage = window.sessionStorage || window.localStorage;
    storage.removeItem(CHECKOUT_DRAFT_KEY);
  } catch (err) {
    console.warn('[CheckoutStorage] Failed to clear draft from storage:', err);
  }
}
