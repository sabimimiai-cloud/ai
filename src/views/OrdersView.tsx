import React, { useState } from 'react';
import { 
  Package, 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Phone, 
  Truck, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ShoppingBag, 
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { CustomerOrder, ActiveView, ProductCategory, Product } from '../types';
import { STORE_CONTACT } from '../data/storeData';
import { PRODUCTS } from '../data/products';

interface OrdersViewProps {
  orders: CustomerOrder[];
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
}

export const OrdersView: React.FC<OrdersViewProps> = ({
  orders,
  onNavigate,
  onSelectProduct
}) => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(
    orders.length > 0 ? orders[0].id : null
  );

  const toggleExpand = (id: string) => {
    setExpandedOrderId(prev => prev === id ? null : id);
  };

  const handleProductClick = (productId: string) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      onSelectProduct(product);
    }
  };

  return (
    <div id="orders-history-page" className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#F4F1EA]">
        <div>
          <button
            onClick={() => onNavigate('shop', 'all')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#173F70] hover:text-[#2563C7] transition-colors mb-3 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#173F70] text-white flex items-center justify-center shadow-xs">
              <Package className="w-5 h-5 text-[#F9C928]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#173F70] font-display">
                My Orders
              </h1>
              <p className="text-xs sm:text-sm text-[#172033]/70">
                Review your completed purchases and delivery requests
              </p>
            </div>
          </div>
        </div>

        {orders.length > 0 && (
          <div className="flex items-center gap-2 text-xs font-bold text-[#173F70] bg-[#F4F1EA] px-3.5 py-2 rounded-xl self-start sm:self-auto">
            <span>{orders.length} {orders.length === 1 ? 'Order' : 'Orders'} Placed</span>
          </div>
        )}
      </div>

      {/* Orders List or Empty State */}
      {orders.length === 0 ? (
        <div 
          id="orders-empty-state"
          className="bg-white rounded-3xl p-8 sm:p-14 text-center border border-[#F4F1EA] shadow-xs my-6"
        >
          <div className="w-16 h-16 rounded-full bg-[#FFFDF8] border border-[#F4F1EA] text-[#173F70] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Package className="w-8 h-8 text-[#F58220]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#173F70] font-display mb-2">
            No orders yet.
          </h2>
          <p className="text-sm text-[#172033]/75 max-w-sm mx-auto mb-6 leading-relaxed">
            When you complete checkout for your little one, your saved order details, items, and delivery receipts will appear here.
          </p>
          <button
            onClick={() => onNavigate('shop', 'all')}
            className="bg-[#173F70] hover:bg-[#2563C7] text-white px-7 py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-[#F9C928]" />
            <span>START SHOPPING</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const isExpanded = expandedOrderId === order.id;
            const whatsappInquiryText = encodeURIComponent(
              `Hello Buubu Bloom! 🌸 Checking on my Order ${order.orderNumber} placed on ${order.formattedDate} for ${order.customer.fullName}. Could you please share the current dispatch status?`
            );

            return (
              <div 
                key={order.id}
                id={`order-card-${order.id}`}
                className="bg-white rounded-3xl border border-[#F4F1EA] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Order Card Header */}
                <div 
                  onClick={() => toggleExpand(order.id)}
                  className="p-5 sm:p-6 bg-[#FFFDF8] border-b border-[#F4F1EA] flex flex-wrap items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base sm:text-lg font-black text-[#173F70] font-display">
                        Order {order.orderNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#27AFA5]/15 text-[#173F70] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#27AFA5]/30">
                        <CheckCircle2 className="w-3 h-3 text-[#27AFA5]" />
                        <span>Status: {order.status}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#172033]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#F58220]" />
                      <span>{order.formattedDate}</span>
                      <span>•</span>
                      <span>{order.items.reduce((acc, i) => acc + i.quantity, 0)} {order.items.reduce((acc, i) => acc + i.quantity, 0) === 1 ? 'item' : 'items'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[11px] font-bold text-[#172033]/60 uppercase tracking-wider">
                        Total
                      </p>
                      <p className="text-base sm:text-lg font-black text-[#173F70] font-display">
                        ₦{order.total.toLocaleString()}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#F4F1EA] text-[#173F70] flex items-center justify-center">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Order Details */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 space-y-6 animate-in fade-in-50 duration-200">
                    {/* Products Purchased */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#173F70] mb-3">
                        Products Purchased
                      </h4>
                      <div className="divide-y divide-[#F4F1EA] border border-[#F4F1EA] rounded-2xl overflow-hidden">
                        {order.items.map((item, idx) => (
                          <div 
                            key={`${item.productId}-${idx}`}
                            className="p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 hover:bg-[#FFFDF8] transition-colors"
                          >
                            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-14 h-14 object-cover rounded-xl border border-[#F4F1EA] shrink-0"
                                />
                              ) : (
                                <div className="w-14 h-14 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#173F70] shrink-0">
                                  <Package className="w-6 h-6 opacity-40" />
                                </div>
                              )}
                              <div className="min-w-0">
                                <button
                                  onClick={() => handleProductClick(item.productId)}
                                  className="text-xs sm:text-sm font-bold text-[#173F70] hover:text-[#2563C7] text-left truncate block max-w-xs sm:max-w-md cursor-pointer"
                                  title={item.name}
                                >
                                  {item.name}
                                </button>
                                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#172033]/70 mt-0.5">
                                  <span>Size: <strong>{item.selectedSize}</strong></span>
                                  <span>•</span>
                                  <span>Color: <strong>{item.selectedColor}</strong></span>
                                  <span>•</span>
                                  <span>Qty: <strong>{item.quantity}</strong></span>
                                </div>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <p className="text-xs sm:text-sm font-bold text-[#173F70]">
                                ₦{(item.price * item.quantity).toLocaleString()}
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-[10px] text-[#172033]/60">
                                  ₦{item.price.toLocaleString()} each
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Customer & Delivery Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Customer Contact */}
                      <div className="bg-[#FFFDF8] p-4 rounded-2xl border border-[#F4F1EA] text-xs space-y-2">
                        <p className="font-black text-[#173F70] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#27AFA5]" />
                          <span>Customer Details</span>
                        </p>
                        <p className="text-sm font-bold text-[#172033]">
                          {order.customer.fullName}
                        </p>
                        <p className="text-[#172033]/80">
                          {order.customer.phoneNumber}
                        </p>
                      </div>

                      {/* Delivery / Pickup Method */}
                      <div className="bg-[#FFFDF8] p-4 rounded-2xl border border-[#F4F1EA] text-xs space-y-2">
                        <p className="font-black text-[#173F70] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          {order.customer.deliveryMethod === 'pickup' ? (
                            <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                          ) : (
                            <Truck className="w-3.5 h-3.5 text-[#2563C7]" />
                          )}
                          <span>
                            {order.customer.deliveryMethod === 'pickup' ? 'Store Pickup' : 'Doorstep Delivery'}
                          </span>
                        </p>
                        {order.customer.deliveryMethod === 'pickup' ? (
                          <div>
                            <p className="font-bold text-[#172033]">Galleria Mall, Orchid Road, Lagos</p>
                            <p className="text-[11px] text-[#172033]/70">Ready for collection during store hours</p>
                          </div>
                        ) : (
                          <div>
                            <p className="font-bold text-[#172033]">{order.customer.deliveryState}</p>
                            <p className="text-[#172033]/80">{order.customer.address}</p>
                          </div>
                        )}
                        {order.customer.notes && (
                          <p className="text-[11px] italic text-[#172033]/70 pt-1 border-t border-[#F4F1EA]">
                            Note: "{order.customer.notes}"
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Order Financial Breakdown */}
                    <div className="bg-[#F4F1EA]/60 p-4 rounded-2xl text-xs space-y-2 border border-[#F4F1EA]">
                      <div className="flex justify-between text-[#172033]/80">
                        <span>Items Subtotal</span>
                        <span className="font-bold text-[#173F70]">₦{order.subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-[#172033]/80">
                        <span>Delivery Fee</span>
                        <span className="font-bold text-[#27AFA5]">
                          {order.deliveryFee === 0 ? 'FREE (Store Pickup)' : `₦${order.deliveryFee.toLocaleString()}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base font-black text-[#173F70] pt-2 border-t border-gray-300">
                        <span>Total Amount</span>
                        <span className="font-display">₦{order.total.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Order Actions: WhatsApp Support */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <a
                        href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${whatsappInquiryText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#27AFA5] hover:bg-[#209086] text-white px-5 py-3 rounded-xl text-xs font-bold shadow-xs transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp regarding {order.orderNumber}</span>
                      </a>

                      <button
                        onClick={() => onNavigate('shop', 'all')}
                        className="w-full sm:w-auto text-xs font-bold text-[#173F70] hover:text-[#2563C7] py-2 px-3 transition-colors cursor-pointer"
                      >
                        Browse more children's wear →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
