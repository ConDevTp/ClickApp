import {
  OptionsManager,
  TextArea,
  TextInput,
} from "@/components/editor/controls/attributes";
import {
  BackgroundColor,
  BorderRadius,
  Color,
  FontSize,
  TextAlign,
} from "@/components/editor/controls/styles";

export const InputComponents = {
  // Styles
  backgroundColor: BackgroundColor,
  fontSize: FontSize,
  color: Color,
  textAlign: TextAlign,
  borderRadius: BorderRadius,
  // Attributes
  content: TextArea,
  src: TextInput,
  alt: TextInput,
  options: OptionsManager,
};
