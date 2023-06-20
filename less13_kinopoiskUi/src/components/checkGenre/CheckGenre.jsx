import './CheckGenre.css'

function CheckGenre() {
  const genre = [
    { name: "боевик", id: 1 },
    { name: "комедия", id: 2 },
    { name: "документальный", id: 3 },
    { name: "триллер", id: 4 },
    { name: "ужасы", id: 5 },
    { name: "мультфильм", id: 6 },
  ];

  return genre.map((genre) => (
    <div className="chek-genre" key={genre.id}>
      <input type="checkbox" key={genre.id} value={genre.name} />
      <label className="label-genre">{genre.name}</label>
    </div>
  ));
}

export default CheckGenre;
