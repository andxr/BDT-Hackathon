import DownArrow from "components/Icons/DownArrow";
import { colors } from "styles/theme";

const CountryDropdown = ({
  label,
  placeholder,
  required,
  value,
  onChange,
  name,
  countries,
}) => {
  return (
    <>
      <label>
        {label}
        <select
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
        >
          {countries &&
            countries.map((element) => {
              return (
                <option key={element.code} value={element.name}>
                  {element.name}
                </option>
              );
            })}
        </select>
        <DownArrow
          width={10}
          height={10}
          style={{ position: "absolute", top: "57px", right: "30px" }}
          fill={colors.lightText}
        />
      </label>
      <style jsx>{`
        label {
          display: flex;
          color: ${colors.label};
          flex-direction: column;
          margin: 24px 0px;
          position: relative;
        }
        select {
          height: 58px;
          width: 100%;
          border: 1px solid ${colors.lightText};
          border-radius: 6px;
          padding-left: 15px;
          color: ${colors.placeholder};
          outline: none;
          cursor: pointer;
          appearance: none;
        }
        select:focus {
          border: 1px solid ${colors.outline};
          box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
        }
        label > select {
          margin-top: 14px;
        }
      `}</style>
    </>
  );
};

export default CountryDropdown;
