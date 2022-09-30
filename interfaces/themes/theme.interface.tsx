export interface ITheme {
  theme: {
    body: {
      background: string;
      color: string;
    };
    colors: {
      powderWhite: string;
      persianGreen: string;
      lightBlue: string;
      onyx: string;
    };
    button: {
      background: string;
      color: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    navbar: {
      background: string;
      color: string;
      colapse: string;
    };
    boxShadow: {
      color1: string;
      color2: string;
    };
    avatar: {
      img: string;
    }
  };
}
