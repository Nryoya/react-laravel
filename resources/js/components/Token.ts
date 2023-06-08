const HAS_TOKEN_INPUT = document.head.querySelector(
  'meta[name="csrf-token"]'
) as HTMLMetaElement;

let csrf_token: string = HAS_TOKEN_INPUT.content;

export default csrf_token;