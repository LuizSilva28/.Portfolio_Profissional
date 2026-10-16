/** @format */

export function createCommentTemplete(obj) {
	if (!obj) return console.error("Container pai e/ou obj não existem");

	const cardComment = document.createElement("div");
	cardComment.classList.add("cardComment");

	const divContainer = document.createElement("div");
	divContainer.classList.add("divContainer");

	const name = document.createElement("p");
	name.innerText = obj?.name;

	const rating = document.createElement("span");
	rating.innerText = obj?.rating;
	rating.classList.add("rating");
    const iconRating = document.createElement("i");

	iconRating.classList.add("iconRatingFull");
	// iconRating.classList.add("iconRatingHalf");

	const email = document.createElement("p");
	email.classList.add("emailComment");
	email.innerText = obj?.email;

	const comment = document.createElement("p");
	comment.classList.add("comment");
	comment.innerText = obj?.comment;

	rating.appendChild(iconRating);
	divContainer.append(name, rating);

	cardComment.append(divContainer, email, comment);

	return cardComment;
}
