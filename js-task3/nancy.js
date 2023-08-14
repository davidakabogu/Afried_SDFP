// // Function to calculate change and return a message
// const calculateChange = (purchasedJars, amountPaid) => {
//     const jarPrice = 40;
//     const discountPrice = 100;

//     // Calculate total price based on the number of jars purchased
//     let totalPrice = jarPrice * purchasedJars;

//     // Apply discount if applicable
//     if (purchasedJars >= 3) {
//         const discountedJars = Math.floor(purchasedJars / 3) * 3;
//         const remainingJars = purchasedJars - discountedJars;
//         totalPrice = (discountedJars / 3) * discountPrice + remainingJars * jarPrice;
//     }

//     // Calculate change
//     const change = amountPaid - totalPrice;

const Strawberry = (orders, cash) => {
    //codehere
    const jarPrice = 40;
      const discountPrice = 100;
  
      // Calculate total price based on the number of jars purchased
      let totalPrice = jarPrice * orders;
  
      // Apply discount if applicable
      if (orders >= 3) {
          const discountedJars = Math.floor(orders / 3) * 3;
          const remainingJars = orders - discountedJars;
          totalPrice = (discountedJars / 3) * discountPrice + remainingJars * jarPrice;
      }
  
      // Calculate change
      const change = cash - totalPrice;
  
      // Generate message based on the change
      let message = "";
      if (change > 0) {
          message = `Change: ${change}`;
      } else if (change === 0) {
          message = "Thank you! You've paid the exact amount.";
      } else {
          message = `Insufficient Funds`;
      }
  
      return message;
}

// Example usage
const orders = 7; // Number of jars purchased
const cash = 300; // Amount paid by the customer

const changeMessage = Strawberry(orders, cash);
console.log(changeMessage); // Print the change message
