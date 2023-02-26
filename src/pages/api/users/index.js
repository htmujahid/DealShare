import {
  addUser,
  getCurrentUser,
  updatePassword,
  getUserByEmail,
  getUser,
} from "@/lib/api/db";
import { database, tokenChecker } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { isEmail } from "@/lib/app/user";
import { verifyPassword } from "@/lib/app/user";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

//Add a new user
router.post(async (req, res) => {
  try {
    let { firstName, lastName, email, password, role } = req.body;

    email = String(email).toLowerCase();
    if (!isEmail(email)) {
      return res.status(400).json({
        error: {
          message: "The entered email is invalid. Please enter a valid email.",
        },
      });
    }

    if (await getUserByEmail(email)) {
      return res
        .status(400)
        .json({ error: { message: "The email already exists." } });
    }

    const userId = await addUser({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    return res.json({ id: userId });
  } catch (e) {
    return res.status(500).end();
  }
});

//get current user
router.use(tokenChecker).get(async (req, res) => {
  try {
    const user = await getCurrentUser(req.user._id);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).end();
  }
});

//update user password
router.use(tokenChecker).put(async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    const user = await getUser(req.user._id);
    if (!(await verifyPassword(currentPassword, user.password))) {
      return res.status(403).json({
        error: { message: "The current password is incorrect." },
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(403).json({
        error: { message: "The passwords do not match." },
      });
    }

    await updatePassword(req.user._id, newPassword);

    return res.status(200).end();
  } catch (e) {
    return res.status(500).json({ error: { message: e.message } });
  }
});

export default router.handler(ncRouteHandlerOpts);
