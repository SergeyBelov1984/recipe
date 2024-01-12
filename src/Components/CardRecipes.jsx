import "./CardRecipes.css";

const CardRecipes = () => {
  return (
    <>
      <div className="card">
        <div className="foto">фото</div>
        <div className="dataRecipe">
          <h3>Заголовок салата</h3>
          <p>специя 1</p>
          <p>специя 2</p>
          <p>специя 3</p>
        </div>
      </div>
      <a href="/">
        <button>Вернуться на главную</button>
      </a>
    </>
  );
};

export default CardRecipes;
