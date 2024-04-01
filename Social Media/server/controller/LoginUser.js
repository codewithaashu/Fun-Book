const LoginUser = async (req, res) => {
  try {
    console.log("testing");
    return res.status(201).json({ message: "Login successfully." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default LoginUser;
