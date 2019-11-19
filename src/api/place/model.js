import mongoose, { Schema } from 'mongoose'

const placeSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  address: {
    type: String
  },
  location: [
    {
      lat: {
        type: Number
      },
      long: {
        type: Number
      }
    }
  ],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

placeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      type: this.type,
      startTime: this.startTime,
      endTime: this.endTime,
      address: this.address,
      location: this.location,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Place', placeSchema)

export const schema = model.schema
export default model
