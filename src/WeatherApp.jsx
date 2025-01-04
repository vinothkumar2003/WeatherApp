import React from 'react'
import { WeatherCondition } from './WeatherChild/WeatherCondition'
import { WeatherScarch } from './WeatherChild/WeatherScarch'

export const WeatherApp = () => {
  return (
    <>
    <div className="container">
    <WeatherCondition/>
    </div>
    </>
  )
}
