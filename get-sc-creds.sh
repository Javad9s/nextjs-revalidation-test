get_path="https://nextjs-revalidation-test.vercel.app/api/get-sc-creds?BUILD_SECRET=3be3505c-867c-11ee-b9d1-0242ac120002"
response=$(curl -s $get_path)
# If we got a valid response, then export to process
if [[ "$response" == *"SUSPENSE_CACHE_"* ]]; then
  echo "Got valid suspense cache credentials."
  export $(echo $response | xargs) >/dev/null 2>&1
fi
