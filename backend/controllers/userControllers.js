

// // const User = require('../models/User'); // Update with the correct path

// // const loginUser = async (req, res) => {
// //   const { username, password } = req.body;

// //   try {
// //     // Find user by username
// //     const user = await User.findOne({ username });

// //     if (!user) {
// //       console.log('User not found:', username);
// //       return res.status(400).json({ message: 'User not found' });
// //     }

// //     // Check if passwords match
// //     if (password !== user.password) {
// //       console.log('Invalid password for user:', username);
// //       return res.status(400).json({ message: 'Invalid credentials' });
// //     }

// //     console.log('Login successful for user:', username);
// //     res.json({ message: 'Login successful' });

// //   } catch (err) {
// //     console.error('Server Error:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // module.exports = { loginUser };


// const User = require('../models/User'); // Update with the correct path

// const loginUser = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find user by username
//     const user = await User.findOne({ username });

//     if (!user) {
//       console.log('User not found:', username);
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Check if passwords match
//     if (password !== user.password) {
//       console.log('Invalid password for user:', username);
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     console.log('Login successful for user:', username);
//     res.json({ message: 'Login successful' });

//   } catch (err) {
//     console.error('Server Error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { loginUser };


