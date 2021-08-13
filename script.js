const delivered_messages = document.getElementById("delivered_messages");
const user_message = document.getElementById("message");
const no_message = document.getElementById("no_message");

function sendMessage() {
	//user sending messages list
	linode = document.createElement("li");
	textNode = document.createTextNode(user_message.value);

	linode.appendChild(textNode);
	linode.style.color = "white";
	delivered_messages.appendChild(linode);

	// clear the input message
	user_message.value = "";

	delivered_messages.removeChild(no_message);
}
 