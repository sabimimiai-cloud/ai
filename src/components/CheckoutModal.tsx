import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  Truck, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  ShoppingBag,
  Info
} from 'lucide-react';
import { CartItem } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [deliveryState, setDeliveryState] = useState('Lagos (Lekki / Ajah / Orchid)');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  
  const getDeliveryFee = () => {
    if (deliveryMethod === 'pickup') return 0;
    if (deliveryState.includes('Orchid') || deliveryState.includes('Lekki')) return 2500;
    if (deliveryState.includes('Lagos')) return 3500;
    return 6000; // Nationwide interstate
  };

  const deliveryFee = getDeliveryFee();
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  const formattedWhatsAppReceipt = encodeURIComponent(
    `🛍️ *NEW ORDER - BUUBU BLOOM LAGOS*\n\n` +
    `*Customer Details:*\n` +
    `• Name: ${fullName || 'Customer'}\n` +
    `• Phone: ${phoneNumber || 'Not provided'}\n` +
    `• Method: ${deliveryMethod === 'pickup' ? 'Store Pickup (Galleria Mall, Orchid)' : `Doorstep Delivery (${deliveryState})`}\n` +
    (deliveryMethod === 'delivery' ? `• Address: ${address}\n` : '') +
    (notes ? `• Special Instructions / Sizing Note: ${notes}\n` : '') +
    `\n*Items Ordered:*\n` +
    items.map(item => `• ${item.quantity}x ${item.product.name} [Size: ${item.selectedSize}, Color: ${item.selectedColor}] - ₦${(item.product.price * item.quantity).toLocaleString()}`).join('\n') +
    `\n\n*Items Subtotal:* ₦${subtotal.toLocaleString()}\n` +
    `*Delivery Fee:* ${deliveryFee === 0 ? 'FREE (Store Pickup)' : `₦${deliveryFee.toLocaleString()}`}\n` +
    `*TOTAL:* ₦${total.toLocaleString()}\n\n` +
    `Please confirm stock availability and send payment/account instructions to finalize this order!`
  );

  return (
    <div 
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="checkout-modal-container"
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#F4F1EA] p-6 sm:p-8 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F4F1EA] hover:bg-gray-200 text-[#123B68] flex items-center justify-center transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {orderPlaced ? (
          /* Order Confirmation Screen */
          <div className="text-center py-8 px-2 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#27AFA3]/15 text-[#27AFA3] flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#123B68] font-display">
              Your Order is Ready!
            </h2>

            <p className="text-sm text-[#172033]/80 max-w-md mx-auto">
              Your order total is <strong>₦{total.toLocaleString()}</strong>. Tap below to send your order details directly to our team on WhatsApp. We'll confirm your items, share payment details, and dispatch your package!
            </p>

            <div className="pt-4 max-w-md mx-auto space-y-3">
              <a
                href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${formattedWhatsAppReceipt}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => onClearCart()}
                className="w-full bg-[#27AFA3] hover:bg-[#27AFA3]/90 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>SEND ORDER VIA WHATSAPP (0806 014 3654)</span>
              </a>

              <button
                onClick={() => {
                  onClearCart();
                  onClose();
                }}
                className="w-full bg-[#F4F1EA] text-[#123B68] py-3 rounded-2xl font-bold text-xs hover:bg-gray-200 transition-colors cursor-pointer"
              >
                BACK TO STORE
              </button>
            </div>
          </div>
        ) : (
          /* Order Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#27AFA3] tracking-wider mb-2">
              <Truck className="w-4 h-4" />
              <span>DELIVERY DETAILS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#123B68] font-display mb-1">
              Where should we send it?
            </h2>
            
            {/* Direct WhatsApp Ordering Notice */}
            <div className="bg-[#FFFDF8] border border-[#F4C430]/60 rounded-2xl p-3.5 mb-6 flex items-start gap-2.5 text-xs text-[#172033]/80">
              <Info className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#123B68] font-bold">Quick Ordering: </strong>
                Once you fill this in, your order summary is sent to our WhatsApp line (<strong>0806 014 3654</strong>) for quick confirmation and bank transfer payment.
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              
              {/* Delivery vs Store Pickup Toggle */}
              <div>
                <label className="block text-xs font-black text-[#123B68] uppercase tracking-wider mb-2">
                  How would you like to receive your order?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      deliveryMethod === 'delivery'
                        ? 'border-[#123B68] bg-[#123B68] text-white shadow-xs'
                        : 'border-gray-200 bg-[#F4F1EA] text-[#172033]'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <div>
                      <p className="leading-tight">Doorstep Delivery</p>
                      <p className="text-[10px] opacity-80">Lagos & Nationwide</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      deliveryMethod === 'pickup'
                        ? 'border-[#123B68] bg-[#123B68] text-white shadow-xs'
                        : 'border-gray-200 bg-[#F4F1EA] text-[#172033]'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <div>
                      <p className="leading-tight">Store Pickup (FREE)</p>
                      <p className="text-[10px] opacity-80">Galleria Mall, Orchid</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#123B68] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chioma Adebayo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123B68] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0806 014 3654"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
                  />
                </div>
              </div>

              {/* Delivery Details */}
              {deliveryMethod === 'delivery' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#123B68] mb-1">
                      Delivery Area *
                    </label>
                    <select
                      value={deliveryState}
                      onChange={(e) => setDeliveryState(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#123B68]"
                    >
                      <option value="Lagos (Lekki / Ajah / Orchid)">Lagos — Lekki, Ajah, Orchid, Ikoyi, Victoria Island (₦2,500)</option>
                      <option value="Lagos (Mainland)">Lagos — Ikeja, Surulere, Yaba, Maryland, Magodo (₦3,500)</option>
                      <option value="Abuja (FCT)">Abuja (FCT) — Nationwide Express (₦6,000)</option>
                      <option value="Rivers (Port Harcourt)">Rivers (Port Harcourt) (₦6,000)</option>
                      <option value="Oyo (Ibadan)">Oyo (Ibadan) (₦5,000)</option>
                      <option value="Ogun State">Ogun State (Abeokuta / Ota) (₦4,500)</option>
                      <option value="Enugu / Anambra / Delta / Edo">South-East / South-South States (₦6,000)</option>
                      <option value="Kano / Kaduna / Northern States">Northern Nigerian States (₦6,500)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#123B68] mb-1">
                      Street Address & Nearest Landmark *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="e.g. House 4, Orchid Road, Near Mega Chicken, Lagos"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#123B68] mb-1">
                  Any notes? (e.g. child's age, gift card message, delivery instructions)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Please include birthday card for 4-year-old girl"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
                />
              </div>

              {/* Order Summary Box */}
              <div className="bg-[#F4F1EA] p-4 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between font-medium text-gray-600">
                  <span>Items ({items.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span className="font-bold text-[#172033]">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-[#27AFA3]">
                    {deliveryFee === 0 ? 'FREE (Store Pickup)' : `₦${deliveryFee.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-[#123B68] pt-2 border-t border-gray-300">
                  <span>Total Due</span>
                  <span className="font-display text-lg">₦{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-[#123B68] hover:bg-[#2563C7] text-white py-4 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#F4C430]" />
                  <span>PROCEED TO CONFIRM ORDER (₦{total.toLocaleString()})</span>
                </button>

                <p className="text-[11px] text-center text-gray-500">
                  No online card needed • We confirm availability with you on WhatsApp first
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
