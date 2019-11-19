import { Place } from '.'

let place

beforeEach(async () => {
  place = await Place.create({ name: 'test', type: 'test', startTime: 'test', endTime: 'test', address: 'test', location: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = place.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(place.id)
    expect(view.name).toBe(place.name)
    expect(view.type).toBe(place.type)
    expect(view.startTime).toBe(place.startTime)
    expect(view.endTime).toBe(place.endTime)
    expect(view.address).toBe(place.address)
    expect(view.location).toBe(place.location)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = place.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(place.id)
    expect(view.name).toBe(place.name)
    expect(view.type).toBe(place.type)
    expect(view.startTime).toBe(place.startTime)
    expect(view.endTime).toBe(place.endTime)
    expect(view.address).toBe(place.address)
    expect(view.location).toBe(place.location)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
