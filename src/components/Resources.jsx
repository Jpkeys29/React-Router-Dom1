import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api"
import { useRef } from "react"
import Button from "@mui/material/Button"
import { useState } from "react"

const libraries = ["places"]

function MyMap() {
  const inputref = useRef(null)
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    libraries,
  })
  const [city, setCity] = useState({ short_name: "", long_name: "" })
  console.log(isLoaded)

  const handleOnPlacesChanged = () => {
    let address = inputref.current.getPlaces()
    console.log(address)
    let locality = null
    if (address.length !== 0) {
      let address_components = address[0].address_components
      let find_locality = address_components.filter((item) =>
        item.types.includes("locality")
      )
      let short_name = find_locality[0]?.short_name
      let long_name = find_locality[0]?.long_name
      setCity({ short_name: short_name, long_name: long_name })
      console.log("name", short_name, long_name)
    }
  }

  return (
    <div style={{ marginTop: "10%", textAlign: "center" }}>
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => (inputref.current = ref)}
          onPlacesChanged={handleOnPlacesChanged}
        >
          <input
            type="tex"
            placeholder="Type address"
            style={{
              boxSizing: "border-box",
              border: "1px solid transparent",
              width: "50%",
              height: "50px",
              padding: "0 12px",
              borderRadius: "3px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              outline: "none",
              textOverflow: "ellipses",
              marginTop: "30px",
            }}
          />
        </StandaloneSearchBox>
      )}
      <Button
        variant="outlined"
        style={{ marginTop: "10px" }}
        href={`/search?city_short_name=${city.short_name}&city_long_name=${city.long_name}`}
      >
        SEARCH
      </Button>
    </div>
  )
}

export default MyMap
