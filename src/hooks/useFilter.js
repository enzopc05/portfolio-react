import { useState, useMemo, useEffect } from "react";

export const useFilter = (items, filterFunction, initialFilters = {}) => {
  const [filters, setFilters] = useState(initialFilters || {});

  useEffect(() => {
    // When initialFilters change from outside (e.g., URL params), sync them
    setFilters((prev) => ({ ...prev, ...initialFilters }));
  }, [initialFilters]);

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
    setFilters,
  };
};
