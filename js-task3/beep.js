// function generateMessage(contactList) {
//     const validContacts = contactList.filter(contact => /^[A-Za-z]+$/.test(contact));
//     const numValidContacts = validContacts.length;

//     if (numValidContacts === 0) {
//         return "No one sent you a message!";
//     } else if (numValidContacts === 1) {
//         return `${validContacts[0]} sent you a message!`;
//     } else if (numValidContacts === 2) {
//         return `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
//     } else if (numValidContacts === 3) {
//         return `${validContacts[0]}, ${validContacts[1]} and ${validContacts[2]} sent you a message!`;
//     } else {
//         return `${validContacts.slice(0, 2).join(', ')} and ${numValidContacts - 2} others sent you a message!`;
//     }
// }

function Messages(con) {
	//codehere
	const validContacts = con.filter(contact => /^[A-Za-z]+$/.test(contact));
    const numValidContacts = validContacts.length;

    if (numValidContacts === 0) {
        return "No one sent you a message!";
    } else if (numValidContacts === 1) {
        return `${validContacts[0]} sent you a message!`;
    } else if (numValidContacts === 2) {
        return `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
    } else if (numValidContacts === 3) {
        return `${validContacts[0]}, ${validContacts[1]} and ${validContacts[2]} sent you a message!`;
    } else {
        return `${validContacts.slice(0, 2).join(', ')} and ${numValidContacts - 2} others sent you a message!`;
    }
}
// Example cases
const contacts1 = ["Stanley", "Keanu", "Roger", "Clarke", "8080"];
console.log(Messages(contacts1));

const contacts2 = ["Stanley", "Geralt"];
console.log(Messages(contacts2));

const contacts3 = ["Triss", "The wild hunt"];
console.log(Messages(contacts3));

const contacts4 = ["Kriss", "Ivy", "Kenny"];
console.log(Messages(contacts4));

const contacts5 = ["Coffee machine", "random mousepad"];
console.log(Messages(contacts5));
