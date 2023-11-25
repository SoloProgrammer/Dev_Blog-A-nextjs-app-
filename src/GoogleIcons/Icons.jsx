export const defaultFunc = () => {};

function returnIconSpan(iconName, classes, handleFunc = defaultFunc) {
  return (
    <span
      onClick={handleFunc}
      className={`material-symbols-outlined ${classes.join(" ")}`}
    >
      {iconName}
    </span>
  );
}

export const ImageIcon = ({ classes, handleFunc }) =>
  returnIconSpan("image", classes, handleFunc);

export const UploadIcon = ({ classes, handleFunc }) =>
  returnIconSpan("upload", classes);

export const VideoIcon = ({ classes, handleFunc }) =>
  returnIconSpan("smart_display", classes);

export const XMarkIcon = ({ classes = [], handleFunc }) =>
  returnIconSpan("close", classes, handleFunc);
