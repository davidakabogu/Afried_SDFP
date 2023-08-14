// // function calculateMathExpression(input) {
// //     const operators = {
// //         "plus": "+",
// //         "minus": "-",
// //         "multiply": "*",
// //         "times": "*",
// //         "divided": "/",
// //         "by": "",
// //     };

// //     const words = input.toLowerCase().split(" ");
// //     let expression = "";

// //     for (let i = 0; i < words.length; i++) {
// //         const word = words[i];
// //         if (word in operators) {
// //             expression += operators[word];
// //         } else if (!isNaN(parseFloat(word))) {
// //             expression += word;
// //         } else {
// //             // Invalid input
// //             return null;
// //         }

// //         if (i < words.length - 1 && word !== "by") {
// //             expression += " ";
// //         }
// //     }

// //     try {
// //         return eval(expression);
// //     } catch (error) {
// //         // Invalid expression
// //         return null;
// //     }
// // }

// function basicmath(word){
//     // code here
//       const operators = {
//             "plus": "+",
//             "minus": "-",
//             "multiply": "*",
//             "times": "*",
//             "divided": "/",
//             "by": "",
//         };
    
//         const words = word.toLowerCase().split(" ");
//         let expression = "";
    
//         for (let i = 0; i < words.length; i++) {
//             const wordop = words[i];
//             if (wordop in operators) {
//                 expression += operators[wordop];
//             } else if (!isNaN(parseFloat(wordop))) {
//                 expression += wordop;
//             } else {
//                 // Invalid input
//                 return null;
//             }
    
//             if (i < words.length - 1 && wordop !== "by") {
//                 expression += " ";
//             }
//         }
    
//         try {
//             return eval(expression);
//         } catch (error) {
//             // Invalid expression
//             return null;
//         }
// }
    

// // Example usage
// const word = "100 divided by 23.1";
// const result = basicmath(word);

// if (result !== null) {
//     console.log("Output:", result);
// } else {
//     console.log("Invalid input");
// }


function basicmath(word) {
    const words = word.toLowerCase().split(" ");
    let expression = "";

    for (let i = 0; i < words.length; i++) {
        const wordop = words[i];

        switch (wordop) {
            case "plus":
                expression += "+";
                break;
            case "minus":
                expression += "-";
                break;
            case "multiply":
            case "times":
                expression += "*";
                break;
            case "divided":
                expression += "/";
                break;
            case "by":
                // Skip 'by' in the expression
                break;
            default:
                if (!isNaN(parseFloat(wordop))) {
                    expression += wordop;
                } else {
                    // Invalid input
                    return null;
                }
        }

        if (i < words.length - 1 && wordop !== "by") {
            expression += " ";
        }
    }

    try {
        return eval(expression);
    } catch (error) {
        // Invalid expression
        return null;
    }
}

// Example usage
const input = "100 divided by 23.1";
const result = basicmath(input);
console.log("Output:", result);
