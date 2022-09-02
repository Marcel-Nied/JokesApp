export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export interface MockedJoke {
  id: string;
  category: string;
  content: string;
}

export interface Category {
  id: string;
  code: string;
  name: string;
}
