const Filters = ({ filters, onChange }) => {

  const handleFilterChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <div className="filters">
      <label htmlFor="filter" className="filtersLabel">
        Filter by category:
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        className="filtersInput"
        value={filters}
        onChange={handleFilterChange}
      />
    </div>
  );
}