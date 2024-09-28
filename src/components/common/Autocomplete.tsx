import React, { useState, Fragment, ChangeEvent, KeyboardEvent, MouseEvent } from "react";

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    // Filtra as sugestões que contém o input do usuário
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setActiveSuggestion(0);//Volta para 0, o que significa que a primeira sugestão será marcada como ativa.
    setFilteredSuggestions(filteredSuggestions);// Atualiza a lista de sugestões filtradas com base no input do usuário.
    setShowSuggestions(true);//Define true para que a lista de sugestões seja exibida.
    setUserInput(userInput); //Atualiza com o valor digitado.
  };

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setUserInput(filteredSuggestions[activeSuggestion]);
      setActiveSuggestion(0);
      setShowSuggestions(false);
    } else if (e.key === "ArrowUp") {
      if (activeSuggestion === 0) return;
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.key === "ArrowDown") {
      if (activeSuggestion === filteredSuggestions.length - 1) return;
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            const className = index === activeSuggestion ? "suggestion-active" : "";

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {suggestionsListComponent}
    </Fragment>
  );
};

export default Autocomplete;
