import { addUser, getUserByEmail } from "@/lib/api/db";
import { database } from "@/lib/api/middleware";
import { createRouter } from "next-connect";
import isEmail from "validator/lib/isemail";

const router = createRouter();

router.use(database);

//get all users
router.get(async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).end();
  }
});

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
