import React, { useRef, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ComeBack from "../ComeBack";
import Loader from "../../ui/Loader";

const FormAuth = ({ title, buttonText, link, linkText, className, children, onSubmit, backOnMain }) => {
  const [loading, setLoading] = useState(false);
  const classes = "flex flex-col items-center justify-center h-full max-w-[350px] text-[13px] md:text-[15px] xl:text-base" + (className ? " " + className : "");
  const button = useRef(null);
  const handleSubmit = async(e) => {
    setLoading(true);
    await onSubmit(e);
    setLoading(false);
  };
  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit} className={classes}>
        {!!backOnMain && (
          <ComeBack text={backOnMain.text} link={backOnMain.link} />
        )}
        <h2 className="text-4xl font-ManropeBold text-center">{title}</h2>
        <div className="flex flex-col gap-[10px] mt-12 w-full">
          {children}
          <Button innerRef={button} className="py-4 md:text-[15px] xl:text-base dark:text-blackDark dark:bg-white" type="submit">{buttonText}</Button>
          {!!link && (
            <Link
              to={link}
              className="text-[13px] md:text-[15px] xl:text-base py-4 rounded-[15px] bg-blackSecond/5 text-center text-blackSecond/75 dark:text-white dark:bg-bgGrayDark"
            >{linkText}</Link>
          )}
        </div>
      </form>
    </>
  );
};

FormAuth.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  function(props) {
    if (props.link && !props.linkText) {
      return new Error("Необходимо указать текст ссылки, если указан сама ссылка");
    }
    return null;
  },
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onSubmit: PropTypes.func,
  backOnMain: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};

export default FormAuth;
