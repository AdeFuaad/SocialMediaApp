import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.followings.map((Id) => User.findById(Id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          location,
          picturePath,
        };
      }
    );
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};


// UPDATE 
export const addRemoveFriemd = async (req, res) => {
    try {
        const { Id, friendId } = req.params;
        const user =  await User.findOne({ id });
        const friend = await User.findOne({ friendId });

        if (user.followings.includes(friendId)) {
            user.friends = user.friends.filter((Id) => id !== friendId);
            friend.friends = friend.friends.filter((Id) => id !== Id);
            } else {
                user.friends.push(friendId);
                friend.friends.push(Id);
                }
await user.save();
await friend.save();

const friends = await Promise.all(
    user.followings.map((Id) => User.findById(Id))
  );

  const formattedFriends = friends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return {
        _id,
        firstName,
        lastName,
        occupation,
        location,
        picturePath,
      };
    }
  );

    res.status(200).json(formattedFriends);
    
        } catch (err) {
        res.status(404).json({
            message: err.message,
          });
    }
}
















