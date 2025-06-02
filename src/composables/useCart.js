import { reactive, computed, watch } from 'vue';

const cartKey = 'ecommerce_cart';

const cart = reactive({
  items: JSON.parse(localStorage.getItem(cartKey)) || [],
});

watch(
  () => cart.items,
  (val) => {
    localStorage.setItem(cartKey, JSON.stringify(val));
  },
  { deep: true }
);

function addToCart(product) {
  const item = cart.items.find((i) => i.id === product.id);
  if (item) {
    item.quantity++;
  } else {
    cart.items.push({ ...product, quantity: 1 });
  }
}

function removeFromCart(productId) {
  const index = cart.items.findIndex((i) => i.id === productId);
  if (index !== -1) {
    cart.items.splice(index, 1);
  }
}

function updateQuantity(productId, quantity) {
  const item = cart.items.find((i) => i.id === productId);
  if (item) {
    item.quantity = quantity;
    if (item.quantity < 1) removeFromCart(productId);
  }
}

const cartTotal = computed(() =>
  cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export function useCart() {
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  };
}
