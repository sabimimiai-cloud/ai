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
      fullName: typeof parsed.fullName === 'string' ? parsed.fullName.slice(0, 100).trim() : '',
      phoneNumber: typeof parsed.phoneNumber === 'string' ? parsed.phoneNumber.slice(0, 30).trim() : '',
      deliveryMethod: parsed.deliveryMethod === 'pickup' ? 'pickup' : 'delivery',
      deliveryState: typeof parsed.deliveryState === 'string' ? parsed.deliveryState.slice(0, 100).trim() : DEFAULT_DRAFT.deliveryState,
      address: typeof parsed.address === 'string' ? parsed.address.slice(0, 300).trim() : '',
      notes: typeof parsed.notes === 'string' ? parsed.notes.slice(0, 500).trim() : ''
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
      fullName: draft.fullName !== undefined ? String(draft.fullName).slice(0, 100).trim() : current.fullName,
      phoneNumber: draft.phoneNumber !== undefined ? String(draft.phoneNumber).slice(0, 30).trim() : current.phoneNumber,
      deliveryMethod: draft.deliveryMethod !== undefined ? (draft.deliveryMethod === 'pickup' ? 'pickup' : 'delivery') : current.deliveryMethod,
      deliveryState: draft.deliveryState !== undefined ? String(draft.deliveryState).slice(0, 100).trim() : current.deliveryState,
      address: draft.address !== undefined ? String(draft.address).slice(0, 300).trim() : current.address,
      notes: draft.notes !== undefined ? String(draft.notes).slice(0, 500).trim() : current.notes
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
