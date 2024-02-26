import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b> {item.calouries}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "Category",
  item: [],
};

List.PropTypes ={
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calouries:PropTypes.number
}))}
export default List;
