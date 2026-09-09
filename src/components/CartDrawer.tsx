import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Gift, 
  Sparkles, 
  MessageSquare, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { CartItem } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, qty: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onOpenCheckout: () => void;
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  onNavigateToShop
}) => {
  const [giftWrapping, setGiftWrapping] = useState(false);
  const [giftNote, setGiftNote] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const giftWrapCost = giftWrapping ? 2500 : 0;
  const total = subtotal + giftWrapCost;

  const whatsappReceipt = encodeURIComponent(
    `Hello Buubu Bloom! 🌸 I would like to place an order from your website:\n\n` +
    items.map(item => `• ${item.quantity}x ${item.product.name} (Size: ${item.selectedSize}, Color: ${item.selectedColor}) - ₦${(item.product.price * item.quantity).toLocaleString()}`).join('\n') +
    (giftWrapping ? `\n• Luxury Gift Box & Ribbon Wrapping: ₦2,500\nNote: "${giftNote || 'Happy Birthday!'}"` : '') +
    `\n\n*Total: ₦${total.toLocaleString()}*\n\nPlease confirm availability and delivery details to my address!`
  );

  return (
    <div 
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div 
        id="cart-drawer-container"
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#F4F1EA] flex items-center justify-between bg-[#FFFDF8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#123B68] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#F4C430]" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#123B68] font-display">
                Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
              <p className="text-[11px] text-[#27AFA3] font-bold">
                ✓ Delivering across Nigeria or pickup in store
              </p>
            </div>
          </div>

          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-[#F4F1EA] cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body / Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#F4F1EA] text-[#123B68]/40 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-[#123B68] mb-1">Your bag is empty</h3>
              <p className="text-xs text-[#172033]/70 mb-6 max-w-xs mx-auto">
                Find something cute for them, pick out new shoes, or grab a gift for an upcoming celebration.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToShop();
                }}
                className="bg-[#123B68] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-sm hover:bg-[#2563C7] transition-all cursor-pointer"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div 
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                  className="flex gap-3.5 p-3 rounded-2xl bg-[#FFFDF8] border border-[#F4F1EA] shadow-2xs"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 rounded-xl object-cover bg-[#F4F1EA]"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-[#172033] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                          className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500">
                        <span>Size: <strong className="text-[#123B68]">{item.selectedSize}</strong></span>
                        <span>•</span>
                        <span>Color: <strong className="text-[#123B68]">{item.selectedColor}</strong></span>
                      </div>

                      <p className="text-xs font-black text-[#123B68] mt-1.5 font-display">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F4F1EA]">
                      <div className="flex items-center gap-1.5 bg-[#F4F1EA] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white font-bold text-xs flex items-center justify-center shadow-2xs hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#172033]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white font-bold text-xs flex items-center justify-center shadow-2xs hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-[10px] text-gray-400">
                        ₦{item.product.price.toLocaleString()} each
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Gift Wrap & Note Toggle */}
              <div className="bg-[#F4F1EA]/60 p-4 rounded-2xl border border-[#F4F1EA]">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={giftWrapping}
                    onChange={(e) => setGiftWrapping(e.target.checked)}
                    className="w-4 h-4 rounded text-[#F58220] focus:ring-[#F58220]"
                  />
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#123B68]">
                    <Gift className="w-4 h-4 text-[#F58220]" />
                    <span>Add Gift Box & Handwritten Card (+₦2,500)</span>
                  </div>
                </label>

                {giftWrapping && (
                  <div className="mt-3 animate-in fade-in duration-150">
                    <textarea
                      placeholder="Write the message you want on the gift card..."
                      value={giftNote}
                      onChange={(e) => setGiftNote(e.target.value)}
                      rows={2}
                      className="w-full text-xs p-2.5 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
                    />
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Drawer Footer & Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F4F1EA] bg-[#FFFDF8] space-y-3">
            
            {/* Cost Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Items Subtotal</span>
                <span className="font-bold text-[#172033]">₦{subtotal.toLocaleString()}</span>
              </div>
              {giftWrapping && (
                <div className="flex justify-between text-[#F58220]">
                  <span>Gift Box & Card</span>
                  <span className="font-bold">₦2,500</span>
                </div>
              )}
              <div className="flex justify-between text-base font-black text-[#123B68] pt-2 border-t border-[#F4F1EA]">
                <span>Estimated Total</span>
                <span className="font-display text-lg">₦{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Options */}
            <div className="space-y-2 pt-1">
              <button
                id="cart-proceed-checkout-btn"
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full bg-[#123B68] hover:bg-[#2563C7] text-white py-3.5 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>CONTINUE TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="cart-whatsapp-order-btn"
                href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${whatsappReceipt}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#27AFA3] hover:bg-[#27AFA3]/90 text-white py-3 rounded-2xl font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ORDER VIA WHATSAPP</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-gray-400">
              Pick up at Galleria Mall, Orchid, Lagos or get delivery across Nigeria
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
