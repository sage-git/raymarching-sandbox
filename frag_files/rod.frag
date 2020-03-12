const vec3 p1 = vec3(-1.3, -2.1, 5.8);
const vec3 p2 = vec3(2.1, 1.8, -2.9);
const float radii = 0.3;
float sceneDist(vec3 p, vec3 ray){
    vec3 p12 = p2 - p1;
    float q = clamp(dot(p - p1, p12)/dot(p12, p12), 0.0, 1.0);
    return length(p - mix(p1, p2, q)) - radii;
}

vec3 sceneColor(vec3 p){
    return vec3(1.0, 0.0, 0.0);
}

vec3 getNormal(vec3 p){
    vec3 p12 = p2 - p1;
    float q = clamp(dot(p - p1, p12)/dot(p12, p12), 0.0, 1.0);
    return normalize(p - mix(p1, p2, q));
}