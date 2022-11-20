function useSearch(items, query) {
  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  return { filteredItems };
}

export default useSearch;
