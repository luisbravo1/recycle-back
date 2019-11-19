import { success, notFound } from '../../services/response/'
import { Place } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Place.create(body)
    .then((place) => place.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Place.find(query, select, cursor)
    .then((places) => places.map((place) => place.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Place.findById(params.id)
    .then(notFound(res))
    .then((place) => place ? place.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Place.findById(params.id)
    .then(notFound(res))
    .then((place) => place ? Object.assign(place, body).save() : null)
    .then((place) => place ? place.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Place.findById(params.id)
    .then(notFound(res))
    .then((place) => place ? place.remove() : null)
    .then(success(res, 204))
    .catch(next)
