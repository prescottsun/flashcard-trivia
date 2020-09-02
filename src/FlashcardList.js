import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
	return (
		<div className="card-grid">
			{flashcards.map((flaschard) => {
				return <Flashcard flashcard={flaschard} key={flaschard.id} />;
			})}
		</div>
	);
};

export default FlashcardList;
