import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return passwordRegex.test(v);
      },
      message: props => `${props.value} is not a valid password!`
    }
  }
});

export default mongoose.model('User', UserSchema);