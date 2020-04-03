import Error from './_error';

function OtherError({ statusCode }) {
  return <Error statusCode={statusCode} />
}

OtherError.getInitialProps = ({ res, query }) => {
  return { statusCode: (res && res.statusCode) || (query && query.code) };
};

export default OtherError;
