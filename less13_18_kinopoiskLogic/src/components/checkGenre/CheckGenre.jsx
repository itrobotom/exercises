import './CheckGenre.css'

function CheckGenre({genre}) {

  return genre.map((genre) => (
    <div className="chek-genre" key={genre.id}>
      <input type="checkbox" key={genre.id} value={genre.name} />
      <label className="label-genre">{genre.name}</label>
    </div>
  ));
}

export default CheckGenre;
