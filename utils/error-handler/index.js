const ErrorHandler = (e) => {
  let errorResponse;
  try {
    if (e.response.data == undefined) errorResponse = 'Something went wrong';
    const { errors = [] } = e.response.data;
    errorResponse =
      errors && Array.isArray(errors) ? errors[0].msg : 'Something went wrong';
  } catch (e) {
    errorResponse = 'Something went wrong';
  }

  return errorResponse;
};

export default ErrorHandler;
