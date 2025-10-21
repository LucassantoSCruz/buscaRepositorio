export type ButtonProps = {
  title: string;
  onPress: () => void;
};

export type CardBoxProps = {
  name: string;
  image: string | null;
  type: string;
  onPress: () => void;
};

export type SearchBarProps = {
  query: string;
  setQuery: (text: string) => void;
  getUser: () => void;
};
