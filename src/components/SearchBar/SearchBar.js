const SearchBar = ({searchChange}) => {
  return (
    <>
      <input type="text" placeholder="Cari Judul" onChange ={searchChange}/>
    </>
  );
};

export default SearchBar;
