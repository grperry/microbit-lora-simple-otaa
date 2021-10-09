input.onButtonPressed(Button.A, function () {
    IotLoRaNode.DigitalValue(true, Channels.One)
    IotLoRaNode.loraTransmitPayload()
})
IotLoRaNode.InitialiseRadioOTAA("70B3D57ED004665C", "0000000000000000", "30347FB416A4352E5C6A3BC13EE102DE")
loops.everyInterval(60000, function () {
    IotLoRaNode.LightValue(input.lightLevel(), Channels.Two)
    IotLoRaNode.loraTransmitPayload()
})
