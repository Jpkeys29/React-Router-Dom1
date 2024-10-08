import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api"
import { useRef } from "react"
import Button from "@mui/material/Button"

const libraries = ["places"]

function MyMap() {
  const inputref = useRef(null)
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    libraries,
  })
  console.log(isLoaded)

  const handleOnPlacesChanged = () => {
    let address = inputref.current.getPlaces()
    console.log(address)
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
      <Button variant="outlined" style={{ marginTop: "10px" }} href="/search">
        SEARCH
      </Button>
    </div>
  )
}

export default MyMap
