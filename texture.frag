#version 330 core
out vec4 color; //final fragment

in vec2 UV; //2D texture coordinates from vertex shader
uniform sampler2D myTextureSampler; //used to access 2D texture objects

void main()
{
    color = texture(myTextureSampler, UV); // samples 2D texture at corresponding UV coordinates 
}
