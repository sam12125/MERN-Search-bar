import { debounce } from "lodash";
export const SearchForm = (props) => {
  const { handleSubmit, placeholder } = props;

  const handleKeyup = debounce((e) => {
    const val = e.target.value;
    handleSubmit(val);
  }, 1000);

  return (
    <form
      style={{
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <div>
        <input
          name="search"
          type="search"
          onKeyUp={(e) => handleKeyup(e)}
          placeholder={placeholder}
          style={{
            width: "250px",
            padding: "20px",
            marginLeft: "10px",
            border: "1px #4ccb29 solid",
          }}
        />
      </div>
    </form>
  );
};
