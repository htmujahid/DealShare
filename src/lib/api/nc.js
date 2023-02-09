export const ncRouteHandlerOpts = {
  onError: (err) => {
    console.error("nc error: " + err.stack);
    throw new Error("Something went wrong");
  },
  onNoMatch: (req, res) => {
    return res.status(404).end();
  },
};
