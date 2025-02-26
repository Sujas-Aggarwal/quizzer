import { useState } from "react";
import { questions } from "../../data/questions";

function Questions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCategory, setShowCategory] = useState(true);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number }>({});

  const handleOptionChange = (questionIndex : number, optionIndex : number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const filteredQuestions = questions.filter((question) => {
    const matchesCategory =
      selectedCategory === "all" || question?.category === selectedCategory;
    const matchesSearchQuery = question?.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 py-8 px-2">
      <h1 className="text-4xl">Questions</h1>
      <div className="flex justify-center items-stretch md:items-center gap-2 md:flex-row flex-wrap flex-col my-2 md:my-6 ">
        {/* Search bar and filter section */}
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-200 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 border border-gray-200 rounded-md dark:text-slate-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {[...new Set(questions.map((question) => question.category))].map(
            (category, key) => (
              <option key={key} value={category}>
                {category}
              </option>
            )
          )}
        </select>
        <div className="flex md:gap-8 gap-2 justify-center items-center w-full px-4">
          {" "}
          <label className=" flex gap-2 md:text-base text-sm justify-center items-center ">
            <input
              type="checkbox"
              checked={showCategory}
              onChange={() => setShowCategory(!showCategory)}
            />
            Show Category
          </label>
          <label className=" flex gap-2 md:text-base text-sm justify-center items-center ">
            <input
              type="checkbox"
              checked={showSolution}
              onChange={() => setShowSolution(!showSolution)}
            />
            Show Solutions
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-4xl">
        {filteredQuestions.map((question, key) => (
          <div
            key={key}
            className="flex flex-col gap-2 p-4 border border-gray-200 rounded-md"
          >
            <h2 className="text-base md:text-2xl">{question?.question}</h2>
            {showCategory && (
              <p className="text-xs md:text-base text-gray-500">
                {question?.category}
              </p>
            )}
            {showSolution ? (
              <p className="text-sm md:text-lg">
                Solution: {question?.options[question?.solution]}
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {question?.options.map((option, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${key}`}
                      value={index}
                      checked={selectedOptions[key] === index}
                      onChange={() => handleOptionChange(key, index)}
                    />
                    {option}
                  </label>
                ))}
                {selectedOptions[key] !== undefined && (
                  <p className="text-sm md:text-lg">
                    Solution: {question?.options[question?.solution]}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
