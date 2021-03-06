import { gql } from '@apollo/client'

export const GET_WEATHER = gql`
query getCityByName($name:String!)
  {
      getCityByName(name: $name) {
    name
    country
    coord {
      lon
      lat
    }
    weather {
      temperature{
        actual
      }
      summary {
        title
      }
      timestamp
    }
  }
  }

`