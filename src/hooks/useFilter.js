import { useState, useMemo } from "react";

export const useFilter = (items, filterFunction) => {
  const [filters, setFilters] = useState({});

  const filteredItems = useMemo(() => {
    return items.filter((item) => filterFunction(item, filters));
  }, [items, filters, filterFunction]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({});
  };

  return {
    filteredItems,
    filters,
    updateFilter,
    resetFilters,
  };
};
