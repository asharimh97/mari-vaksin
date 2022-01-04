// Implementation from error handling
// https://swr.vercel.app/docs/error-handling

const fetcher = async (...args) => {
  const res = await fetch(...args);

  if (!res.ok) {
    // throw error if not 2xx
    const error = new Error("An Error occurred while fetching data");

    error.info = await res.json();
    error.status = res.status;

    throw error;
  }

  return res.json();
};

export default fetcher;
