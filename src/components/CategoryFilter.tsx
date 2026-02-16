import React from 'react';
import { ProjectCategory } from '../types/portfolio';

interface CategoryFilterProps {
  categories: ProjectCategory[];
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
              : 'bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;